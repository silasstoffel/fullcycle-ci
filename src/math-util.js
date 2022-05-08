class MathUtil {
    sum(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    sumArray(args) {
        let value = 0;
        for (let i = 0; i < args.length; i++) {
            value += args[i];
        }
        return value;
    }

    subArray(args) {
        let value = args[0];
        for (let i = 0; i < args.length; i++) {
            value -= args[i];
        }
        return value;
    }

    multiplyArray(args) {
        let value = args[0];
        for (let i = 0; i < args.length; i++) {
            value *= args[i];
        }
        return value;
    }
}