import React from 'react'
import './NoteForm.less'
import { Button, Form, Modal, TextArea, Header, Input, Label, Icon } from 'semantic-ui-react'
import { noteActions } from 'actions'
import { noteActionTypes } from 'actionTypes'
import OnEvent from 'react-onevent'

class NoteForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      modalOpen: false,
      text: props.text,
      action: props.action,
      noteIndex: props.noteIndex,
      tagsInputValue: '',
      tags: props.tags || []
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addTag = this.addTag.bind(this)
    this.updateTagValue = this.updateTagValue.bind(this)
  }

  handleOpen () {
    this.setState({ modalOpen: true })
  }

  handleClose () {
    let content = this.state.action === 'edit' ? this.state.text : ''
    this.setState({ 
      modalOpen: false,
      text: content,
      tagsInputValue: '',
      tags: []
     })
  }

  handleChange(e, {name, value}) {
    this.setState({ [name]: value })
  }

  handleSubmit () {
    noteActions.asyncCall(noteActionTypes.NOTES_ADD_NOTE, this.state)
    this.setState({
      modalOpen: false,
      text: '',
      tagsInputValue: '',
      tags: []
    })
  }

  addTag (e) {
    let tag = e.target.value
    let { tags } = this.state
    if (tag == '') return;
    tag = tag.trim();

		if(!(tags.indexOf(tag) > -1)) {
			tags = tags.concat([tag]);
			this.setState({ tags: tags, tagsInputValue: '' })
		}

		this.updateTagValue('');
  }
  
  removeTag (removeTag) {
		let tags = this.state.tags.filter((tag) => tag !== removeTag)
		this.setState({ tags })
	}

  updateTagValue (e) {
    let value = e.target ? e.target.value : ''
		if(value == ' ') {
			return;
		}
		this.setState({
			tagsInputValue: value
    })
	}

  render() {
    let { text, action, tagsInputValue, tags } = this.state
  
    let trigger = action === 'edit' ? <a className='c-note_item__card__buttons-edit' onClick={this.handleOpen}>Edit</a> : <Button onClick={this.handleOpen}>+ Note</Button>
    
    return (
      <Modal
        trigger={trigger}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
        className='c-noteform'
      >
        <Modal.Content className='c-noteform__content'>
          <Modal.Description>
          <Header>Note</Header>
            <Form.Field control={TextArea}
                          autoFocus
                          placeholder='write your note...'
                          name='text'
                          onChange={this.handleChange}
                          value={text}
                          className='c-noteform__textarea'
            />
            <OnEvent space={this.addTag}
                     enter={this.addTag}>
              <Input value={tagsInputValue} 
                     onChange={this.updateTagValue} 
                     type="text" 
                     placeholder="Press enter or space to add tag"
                     className='c-noteform__input' />
            </OnEvent>
            <div>
              {tags && tags.map((tag, index) => <Label color='blue' key={index} as='a'>{tag}<Icon name='close' onClick={() => this.removeTag(tag)} /></Label>)}
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button className='c-noteform__button' inverted onClick={this.handleSubmit}>
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default NoteForm
