import createError from 'http-errors'

const searchForIndex = (files) => {
  const indexes = files.filter((f) => f.name.match(/^index\.[mc]?js$/))
  if (indexes.length > 1) {
    throw createError.BadRequest('Multiple index files found, bailing out: '
      + indexes.map(({ name }) => name).join(', '))
  }
  const index = indexes[0]

  return index?.name
}

export { searchForIndex }
