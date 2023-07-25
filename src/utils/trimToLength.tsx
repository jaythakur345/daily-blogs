function trimToLength(inputString: string, maxLength: number) {
    if (typeof inputString !== 'string') {
        throw new Error('Input should be a string.');
    }

    if (inputString.length <= maxLength) {
        return inputString;
    }

    return inputString.slice(0, maxLength) + '...';
}

export default trimToLength;