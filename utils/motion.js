export const navMotion = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: 'spring',
            damping: 300,
            stiffness: 180
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 1
        }
    }
}

export const heroMotion = (delay , type) => ({
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: type,
            damping: 300,
            stiffness: 180
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: type,
            stiffness: 80,
            delay: delay
        }
    }
})

export const slideIn = {
    hidden: {
        opacity: 1,
        x: '100%' ,
        transition: {
            type: 'tween',
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            delay: 0.2 ,
            duration: 1,
        }
    }
}

export const aboutMotion = (yaxis, duration) => ({
    hidden: {
        opacity: 0,
        y: yaxis,
        transition: {
            type: 'tween',
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            delay: 0.3,
            duration: duration
        }
    }
})

export const worldMotion = ( y , delay ) => ({
    hidden: {
        opacity: 0,
        y: y,
        transition: {
            type: 'spring',
            // damping: 200,
            // stiffness: 180
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            // stiffness: 80,
            delay: delay,
            duration: 1
        }
    }
})

export const workingMotion = (opacity , x , delay, rotate ) => ({
    hidden: {
        opacity: opacity,
        x: x,
        rotate: rotate,
        transition: {
            type: 'tween',
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
            type: 'tween',
            // stiffness: 80,
            delay: delay,
            duration: 1
        }
    }
})

export const footerMotion = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: 'spring',
            damping: 300,
            stiffness: 180
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.5
        }
    }
}

