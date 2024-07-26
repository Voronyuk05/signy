export const validateEmailInput = (value: string): string => {
    
    if (!value.includes('@')) {
        return 'incorrect'
    } else if (!value.includes('email') && !value.includes('mail') && !value.includes('gmail')) {
        return 'incorrect'
    } else if (value === '') {
        ''
    } else {
        return 'correct'
    }
    return ''
}

export const validateTelInput = (value: string): string => {
    if (!value.includes('+')) {
        return 'incorrect'
    } else if (value.length !== 13) {
        return 'incorrect'
    } else if (value === '') {
        ''
    } else {
        return 'correct'
    }
    return ''
}