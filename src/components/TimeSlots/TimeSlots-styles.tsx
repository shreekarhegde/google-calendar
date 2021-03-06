import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	blackBorder: {
		border: '1px solid rgba(224, 224, 224, 1)',
	},
	time: {
		width: '45px',
		textAlign: 'center',
		border: 'none',
		position: 'relative',
	},
	borderNone: {
		border: 'none',
	},
	timeFormat: {
		position: 'absolute',
		top: '-12px',
		left: '50px',
		width: 'fit-content',
	},
	slotWidth: {
		width: '150px',
		padding: '0px',
		position: 'relative',
	},
});
