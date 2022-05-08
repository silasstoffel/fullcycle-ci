class MathUtil {
    sum(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    sumArray(args) {
        let value = 0;
        for (const item of args) {
            value += item;
        }
        return value;
    }

    multiplyArray(args) {
        let value = args[0];
        const length = args.length;
        for (let i = 1; i < length; i++) {
            value *= args[i];
        }
        return value;
    }
}
