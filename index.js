// @flow
import { split, pick, values, replace } from 'ramda'

import aspectRatios from './src/aspect-ratios'
import backgroundPosition from './src/background-position'
import backgroundSize from './src/background-size'
import borderColors from './src/border-colors'
import borderRadius from './src/border-radius'
import borderStyle from './src/border-style'
import borderWidths from './src/border-widths'
import borders from './src/borders'
import boxShadow from './src/box-shadow'
import boxSizing from './src/box-sizing'
import clears from './src/clears'
import code from './src/code'
import coordinates from './src/coordinates'
import debugChildren from './src/debug-children'
import debugGrid from './src/debug-grid'
import display from './src/display'
import flexbox from './src/flexbox'
import floats from './src/floats'
import fontFamily from './src/font-family'
import fontStyle from './src/font-style'
import fontWeight from './src/font-weight'
import forms from './src/forms'
import heights from './src/heights'
import hovers from './src/hovers'
import letterSpacing from './src/letter-spacing'
import lineHeight from './src/line-height'
import links from './src/links'
import lists from './src/lists'
import maxWidths from './src/max-widths'
import negativeMargins from './src/negative-margins'
import nested from './src/nested'
import opacity from './src/opacity'
import outlines from './src/outlines'
import overflow from './src/overflow'
import position from './src/position'
import rotation from './src/rotation'
import spacing from './src/spacing'
import skins from './src/skins'
import tables from './src/tables'
import textAlign from './src/text-align'
import textDecorators from './src/text-decorators'
import textTransform from './src/text-transform'
import typeScale from './src/type-scale'
import typography from './src/typography'
import utilites from './src/utilites'
import verticalAlign from './src/vertical-align'
import visibility from './src/visibility'
import whiteSpace from './src/white-space'
import widths from './src/widths'
import wordBreak from './src/word-break'
import zIndex from './src/z-index'

const modules = {
  ...aspectRatios,
  ...backgroundPosition,
  ...backgroundSize,
  ...borderColors,
  ...borderRadius,
  ...borderStyle,
  ...borderWidths,
  ...borders,
  ...boxShadow,
  ...boxSizing,
  ...clears,
  ...code,
  ...coordinates,
  ...debugChildren,
  ...debugGrid,
  ...display,
  ...flexbox,
  ...floats,
  ...fontFamily,
  ...fontStyle,
  ...fontWeight,
  ...forms,
  ...heights,
  ...hovers,
  ...letterSpacing,
  ...lineHeight,
  ...links,
  ...lists,
  ...maxWidths,
  ...negativeMargins,
  ...nested,
  ...opacity,
  ...outlines,
  ...overflow,
  ...position,
  ...rotation,
  ...spacing,
  ...skins,
  ...tables,
  ...textAlign,
  ...textDecorators,
  ...textTransform,
  ...typeScale,
  ...typography,
  ...utilites,
  ...verticalAlign,
  ...visibility,
  ...whiteSpace,
  ...widths,
  ...wordBreak,
  ...zIndex
}

Object.freeze(modules)

export default function(classesList: string): Object {
  const processedList /*: string */ = replace(/-/g, '_', classesList)
  const classesArray /*: Array<string> */ = split(' ', processedList)
  const selectedClasses /*: Object */ = pick(classesArray, modules)
  const rulesArray /*: Array<Object> */ = values(selectedClasses)
  const rule = {}

  rulesArray.forEach(r => {
    const keys /*: Array<string> */ = Object.keys(r)
    const values /*: Array<mixed> */ = Object.values(r)

    keys.forEach((k, i) => {
      rule[k] = values[i]
    })
  })

  return rule
}
