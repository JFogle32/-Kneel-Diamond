import { getStyles, setStyle } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value)) 
        }
    }
)

const styles = getStyles()

const findStyle = (bowser) => {
    return styles.find(bear => bear.id === parseInt(bowser))
}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            const findIt = findStyle(event.target.value)
            window.alert(`User chose style ${findIt.style}`)
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

mport { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}