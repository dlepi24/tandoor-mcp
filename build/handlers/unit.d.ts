import { TandoorClient } from '../clients/index.js';
export declare function handleListUnits(client: TandoorClient, args: any): Promise<string>;
export declare function handleMergeUnits(client: TandoorClient, args: {
    source_id: number;
    target_id: number;
}): Promise<string>;
