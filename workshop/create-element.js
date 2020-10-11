export default function create(tag, props, ...children) {
    const newElem = document.createElement(tag);
    const elemWithProps = Object.assign(newElem, props)
    elemWithProps.append(...children)
    return elemWithProps
}

