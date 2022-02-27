
function AddTask() {
  return (
    <form className="add-form">
      <div className="form-control input">
          <label>Task</label>
          <input type="text" placeholder="Add task..." />
      </div>
      <div className="form-control label">
          <label>Day & Time</label>
          <input type="text" placeholder="Add Day & Time" />
      </div>
      <div className="form-control form-control-check">
          <label>Reminder</label>
          <input type="checkbox" />
      </div>

      <input type="submit" value="Save Task"
      className="btn btn-block" />
    </form>
  )
}

export default AddTask
