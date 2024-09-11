import { style } from '@vanilla-extract/css';

export const headerStyles = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'beige',
    padding: '8px 12px',
    '@media': {
        'screen and (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '8px 24px',
        },
    },
});

export const logoStyles = style({
    fontSize: '24px',
    color: 'violet',
});

export const menuStyles = style({
    display: 'flex',
    listStyle: 'none',
    paddingLeft: 0,
    '@media': {
        'screen and (max-width: 600px)': {
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            selectors: {
                '&.active': {
                    display: 'flex',
                },
            },
        },
    },
});

export const menuItemStyles = style({
    padding: '8px 12px',
    ':hover': {
        backgroundColor: 'grey',
        borderRadius: '4px',
    },
    '@media': {
        'screen and (max-width: 600px)': {
            width: '100%',
            textAlign: 'center',
        },
    },
});

export const linksStyles = style({
    listStyle: 'none',
    paddingLeft: 0,
    color: 'teal',
    display: 'flex',
    '@media': {
        'screen and (max-width: 600px)': {
            display: 'none',
            justifyContent: 'center',
            width: '100%',
            selectors: {
                '&.active': {
                    display: 'flex',
                },
            },
        },
    },
});

export const toggleBtnStyles = style({
    display: 'none',
    position: 'absolute',
    right: '32px',
    fontSize: '24px',
    '@media': {
        'screen and (max-width: 600px)': {
            display: 'block',
        },
    },
});
