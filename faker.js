const _ = require('lodash')
const faker = require('faker')

const get = {
  paragraphs(count) {
    return _.range(0, count).map(() => get.sentences(5)).join("\n\n")
  },

  sentences(count) {
    return faker.lorem.sentences(count)
  },

  words(count) {
    return faker.lorem.words(count)
  },

  firstName() {
    return faker.name.firstName()
  },

  lastName() {
    return faker.name.firstName()
  },
}

const argMap = {
  p: 'paragraphs',
  s: 'sentences',
  w: 'words',
  f: 'firstName',
  l: 'lastName',
}

const dataType = process.argv[2]
const count = +process.argv[3] || 1

const fn = argMap[dataType]
process.stdout.write(get[fn](count)) // use stdout to avoid new line
