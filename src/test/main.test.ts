import {describe, test, expect} from "vitest";
import {add} from "../ts/main.ts";

describe('Add function works as expected', () => {
    test('Add two numbers', () => {
        const result = add(1, 2);

        expect(result).toBe(3);
    });
});
