import {OrderedMap, Map} from "immutable"

export function arrToMap(arr, DateRecord = Map) {
    return arr.reduce((obj, comment) => obj.set(comment.id, new DateRecord(comment)), new OrderedMap({}))
};
export function mapToArr(obj) {
    return  obj.valueSeq().toArray();
}