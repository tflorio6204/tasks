import { isNamedExportBindings } from "typescript";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [...numbers, ...numbers];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number) => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    const integerArray: number[] = numbers.map((number: string) => {
        let parsedNumber: number;
        if (isNaN(parseInt(number))) {
            number = "0";
            parsedNumber = parseInt(number);
        } else {
            parsedNumber = parseInt(number);
        }
        return parsedNumber;
    });
    return integerArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    if (amounts.length === 0) {
        return [];
    }
    const prices: number[] = amounts.map((amount: string) => {
        let parsedPrice: number;
        if (amount[0] === "$") {
            amount = amount.slice(1, amount.length);
            if (isNaN(parseInt(amount))) {
                amount = "0";
                parsedPrice = parseInt(amount);
            } else {
                parsedPrice = parseInt(amount);
            }
        } else if (isNaN(parseInt(amount))) {
            amount = "0";
            parsedPrice = parseInt(amount);
        } else {
            parsedPrice = parseInt(amount);
        }
        return parsedPrice;
    });
    return prices;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    if (messages.length === 0) {
        return [];
    }
    const revisedList = messages.filter(
        (message: string) => !message.endsWith("?"),
    );
    const exclaimedList = revisedList.map((message: string) => {
        if (message.endsWith("!")) {
            message = message.toUpperCase();
        }
        return message;
    });
    return exclaimedList;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    if (words.length === 0) {
        return 0;
    }
    return words.filter((word: string) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const validColor = colors.filter((color: string) => {
        if (color === "red" || color === "blue" || color === "green") {
            return color;
        }
    });
    if (validColor.length === colors.length) {
        // if all colors are valid then it should be the same length as original
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let operation: string = "";
    let count: number = 0;
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    addends.forEach((num: number) => {
        if (count === 0) {
            operation = sum + "=" + num.toString();
        } else {
            operation = operation + "+" + num.toString();
        }
        count++;
    });
    return operation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // Line #171 and Lines 173-179 were written by ChatGPT
    let foundNegative = false; // (It helped debug my code because I didn't know how to sum without summing a whole array)
    const index = values.findIndex((value: number) => value < 0);
    const sumBeforeNegative = values.reduce((currentTotal, value) => {
        if (foundNegative || value < 0) {
            foundNegative = true;
            return currentTotal;
        }
        return currentTotal + value;
    }, 0);
    if (index === -1) {
        return [...values, sumBeforeNegative];
    }
    const newArray = [...values];
    newArray.splice(index + 1, 0, sumBeforeNegative);
    return newArray;
}
