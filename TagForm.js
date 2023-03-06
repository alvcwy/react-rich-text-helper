function TagForm() {
  // Declare variables, and set their default values 
  const [text, setText] = React.useState("Raichu when");
  const [selectedTag, setSelectedTag] = React.useState("<a></a>");
  const [color, setColor] = React.useState(""); 

  // Changes text in textbox when value is updated
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // When add tag button is clicked, add tags to text
  const handleAddTagClick = () => {
    // Clear all text if quad is selected
    if (selectedTag === "<quad>") {
        setText("<quad>");
    }
    else {
      const tagIndex = selectedTag.indexOf(">");
      setText(selectedTag.slice(0, tagIndex + 1) + text + selectedTag.slice(tagIndex + 1));
    }
  };

  // Remove outermost tag from text
  const handleRemoveTagClick = () => {
    const closingTagStart = text.indexOf(">");
    const openingTagEnd = text.lastIndexOf("<");
    const newText = text.slice(closingTagStart + 1, openingTagEnd);
    setText(newText);
  };

  // New tag selected with radio buttons
  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  // New color selected from dropdown menu
  const handleColorChange = (event) => {
    setColor(event.target.value);
    const newTag = `<color=${event.target.value}></color>`;
    setSelectedTag(newTag);
  };

  return (
    <div>
      <form>
        <label>
          Text:
          <input type="text" value={text} onChange={handleInputChange}/>
        </label>
      </form>
      <div>
        Select Tag:
        <label>
          <input type="radio" value="<a></a>" checked={selectedTag === "<a></a>"} onChange={handleTagChange} />
          <span style={{ color: "blue" }}>Blue</span>
        </label>
        <label>
          <input type="radio" value="<b></b>" checked={selectedTag === "<b></b>"} onChange={handleTagChange} />
          <b>Bold</b>
        </label>
        <label>
          <input type="radio" value="<i></i>" checked={selectedTag === "<i></i>"} onChange={handleTagChange} />
          <i>Italic</i>
        </label>
        <label>
          <input type="radio" value="<size=50></size>" checked={selectedTag === "<size=50></size>"} onChange={handleTagChange} />
          <span style={{ fontSize: "50px" }}>Large</span>
        </label>
        <label>
          <input type="radio" value="<color=red></color>" checked={selectedTag === "<color=red></color>"} onChange={handleTagChange} />
          <span style={{ color: "orange" }}>Color</span>
          <select value={color} onChange={handleColorChange}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="blue">Blue</option>
          </select>
        </label>
        <label>
          <input type="radio" value="<quad>" checked={selectedTag === "<quad>"} onChange={handleTagChange}/>
          <span>qUaD (random letters)</span>
        </label>
      </div>
      <button onClick={handleAddTagClick}>Add Tag</button>
      <button onClick={handleRemoveTagClick}>Remove Tag</button>
    </div>
  );
}

ReactDOM.render(React.createElement(TagForm), document.getElementById("root"));