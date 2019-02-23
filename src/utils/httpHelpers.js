export const mapPropsToData = (...props) => res => {
  const { results } = res.data

  Object
    .entries(res.data)
    .filter(([key]) => !props || props.includes(key))
    .forEach(([prop, value]) => { results[prop] = value })

  return results
}
