import { style } from '@vanilla-extract/css';

export const headerContainer = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',

    '@media': {
        'screen and (max-width: 768px)': {
            flexDirection: 'row',
            alignItems: 'flex-start',
        },
    },
});

export const logoStyle = style({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',

    '@media': {
        'screen and (max-width: 768px)': {
            fontSize: '1.2rem',
        },
    },
});

export const navStyle = style({
    display: 'flex',
    gap: '15px',

    '@media': {
        'screen and (max-width: 768px)': {
            flexDirection: 'column',
            gap: '10px',
            display: 'none', // 처음에는 숨김
        },
    },
});

export const navVisible = style({
    '@media': {
        'screen and (max-width: 768px)': {
            display: 'flex', // 토글로 보임 처리
        },
    },
});

export const navItem = style({
    color: '#333',
    textDecoration: 'none',
    fontSize: '1rem',
    flexDirection: 'column',

    ':hover': {
        color: '#0070f3',
    },

    '@media': {
        'screen and (max-width: 768px)': {
            fontSize: '0.9rem',
        },
    },
});

export const menuButton = style({
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',

    '@media': {
        'screen and (max-width: 768px)': {
            display: 'block',
            cursor: 'pointer',
        },
    },
});
