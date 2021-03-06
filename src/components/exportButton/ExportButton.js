import React from 'react'
import ReactExport from 'react-data-export'
import { Button, Icon } from 'semantic-ui-react'
import { NoteStore } from 'stores'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class ExportButton extends React.Component {
	constructor (props) {
		super(props)
		this.state = {}

		this.updateState = this.updateState.bind(this)
		NoteStore.addChangeListener(this.updateState)
	}
    
	componentWillUnmount () {
		NoteStore.removeChangeListener(this.updateState)
	}
	
	updateState(state) {
		this.setState(
			state
		)
	}

	render() {
		let { notes } = this.state

		return (
			<ExcelFile filename='Notes' element={<Button icon labelPosition='left'><Icon name='download' />Export</Button>}>
				{notes &&
				<ExcelSheet data={notes} name="Notes">
					<ExcelColumn label="Notes" value='text'/>
					<ExcelColumn label="Tags" value={(col) => col.tags.join(',')}/>
					<ExcelColumn label="Create At" value='createdAt'/>
					<ExcelColumn label="Last Modified At" value='lastModifiedAt'/>
				</ExcelSheet>
				}
			</ExcelFile>
		)
	}
}

export default ExportButton