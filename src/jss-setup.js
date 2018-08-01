import jss,{SheetsRegistry} from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

export default (styles) => {
	return jss.createStyleSheet(styles).attach().classes
}