class NoteService {

  setNotes (payload, callback) {
    try {
      localStorage.setItem('notes', JSON.stringify(payload))
      callback()
    } catch (e) {
      let errs = {
        errors: 'LocalStorage error'
      }
      callback(errs)
    }
  }

  getNotes () {
    let notes = localStorage.getItem('notes')
    if(notes){
      return JSON.parse(notes)
    }
    return null

  }

  clearNotes () {
    localStorage.removeItem('notes')
  }

}

export default new NoteService()
