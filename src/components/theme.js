import { Component } from "react"

class Button extends Component {
  render() {
    const texts = this.props.texts
    const tulisan = texts ? texts : "text disini"
    return (
      <div>
        <a href="https://tokorame.co.id/" type="_parent" className="bg-pink-300 py-2 px-12 full cursor-default">{tulisan}</a>
      </div>
    )
  }
}

export default Button