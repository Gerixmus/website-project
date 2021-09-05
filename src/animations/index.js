export const animationSwitch = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

export const animationSwitch2 = {
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: '-100vh',
        scale: 1
    }
};

export const animationSwitch3 = {
    in: {
        opacity: 1,
        x: -300,
        scale: 1
    },
    out: {
        opacity: 0,
        x: 300,
        scale: 1
    },
    end: {
        x: 0,
        opacity: 1
    }
};

export const transition = {
    duration: 0.5
};