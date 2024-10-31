import { getBuffer } from '../app';
import ArrayBufferConverter from '../ArrayBufferConverter';

const converter = new ArrayBufferConverter();
const buffer = getBuffer();

test('uploading data', () => {
    converter.load(buffer);
    expect(converter.bufferView).toBeInstanceOf(Object);
});

test('translating content to a string', () => {
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});