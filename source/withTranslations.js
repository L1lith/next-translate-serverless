const { sanitize } = require('sandhands')

const configFormat = {
  _: {
    i18n: {
      _: {
        locales: [String],
        defaultLocale: String
      },
      strict: false
    }
  },
  strict: false
}

function withTranslations(config) {
  sanitize(config, configFormat)
  const { i18n } = config
  const { defaultLocale, locales } = i18n
  //const secondaryLocales = locales.filter(locale => locale !== defaultLocale)
  const exportPathMap = defaultPathMap => {
    const pathMap = {}

    Object.entries(defaultPathMap).forEach(([key, value]) => {
      pathMap[key] = { ...value }

      locales.forEach(language => {
        pathMap[`/${language}${key}`] = { ...value }
      })
    })

    return pathMap
  }
  return { ...config, exportPathMap }
}

export default withTranslations
