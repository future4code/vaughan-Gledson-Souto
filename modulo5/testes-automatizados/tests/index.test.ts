import { performPurchase, User } from "../src";

test("Testing balance greater than value", () => {
    const user: User = {
        name: "Gledson",
        balance: 100
    }
    
    const result = performPurchase(user, 40);
    
    expect(result) .toEqual({
        name: "Gledson",
        balance: 60
    });
    
});

test("Testing balance greater than value", () => {
    const user: User = {
        name: "Gledson",
        balance: 50
    }
    
    const result = performPurchase(user, 50);
    
    expect(result) .toEqual({
        name: "Gledson",
        balance: 0
    });
    
});

test("Testing balance greater than value", () => {
    const user: User = {
        name: "Gledson",
        balance: 30
    }
    
    const result = performPurchase(user, 50);
    
    expect(result).not.toBeDefined();
    
});