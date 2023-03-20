import '../styles/Instruction.css'

const Instruction = (props) => {
  const removeInstruction = props.remove
  return(
    <section id="instruction" data-remove='yes' onClick={removeInstruction}>
      <h4>Instruction for editing:</h4>
      <ol>
        <li>Hover to the section you want to modify.</li>
        <li>Click the appropriate button.</li>
        <li>Fill up the form.</li>
        <li>Save.</li>
      </ol>
      <h4>Instruction for saving into pdf</h4>
      <ol>
        <li>Make sure that there are no buttons showing.</li>
        <li>Right click on a clear space on the page.</li>
        <li>Select print // Ctrl + P</li>
        <li>Go into more Settings</li>
        <li>Make sure that the right paper size is selected</li>
        <li>Make sure that the Header and footers is unchecked</li>
        <li>Press Save</li>
      </ol>
      <button type="button" data-remove='yes' onClick={removeInstruction}>Close</button>
    </section>
  )
}

export default Instruction