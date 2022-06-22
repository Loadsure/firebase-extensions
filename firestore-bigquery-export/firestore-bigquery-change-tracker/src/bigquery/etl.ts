import * as logs from "../logs";
import { logger } from "firebase-functions";

export const etl_function = (rows) => {
    logs.etl_log;

    const rows1 = rows;
    logger.log("ROWS:")
    logger.log(rows);
    return rows1;
};