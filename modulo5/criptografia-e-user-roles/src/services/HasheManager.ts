
import * as bcrypt from "bcryptjs"

export const hash = async (s: string): Promise<string> => {

    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);

    return result;
}

export const compare = async (s: string, hash: string): Promise<boolean> => {
    const result = await bcrypt.compare(s, hash)
    console.log(result);
    return result;
}