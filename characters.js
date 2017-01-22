const Characters = {
    'a': [0x00, 0x00, 0x00, 0x19, 0x80, 0x24, 0x80, 0x22, 0x80, 0x22, 0x80, 0x22, 0x00, 0x3F, 0x00, 0x20],
    'b': [0x08, 0x00, 0xF8, 0x3F, 0x00, 0x11, 0x80, 0x20, 0x80, 0x20, 0x00, 0x11, 0x00, 0x0E, 0x00, 0x00],
    'c': [0x00, 0x00, 0x00, 0x0E, 0x00, 0x11, 0x80, 0x20, 0x80, 0x20, 0x80, 0x20, 0x00, 0x11, 0x00, 0x00],
    'd': [0x00, 0x00, 0x00, 0x0E, 0x00, 0x11, 0x80, 0x20, 0x80, 0x20, 0x88, 0x10, 0xF8, 0x3F, 0x00, 0x20],
    'e': [0x00, 0x00, 0x00, 0x1F, 0x80, 0x22, 0x80, 0x22, 0x80, 0x22, 0x80, 0x22, 0x00, 0x13, 0x00, 0x00],
    'f': [0x00, 0x00, 0x80, 0x20, 0x80, 0x20, 0xF0, 0x3F, 0x88, 0x20, 0x88, 0x20, 0x88, 0x00, 0x18, 0x00],
    'g': [0x00, 0x00, 0x00, 0x6B, 0x80, 0x94, 0x80, 0x94, 0x80, 0x94, 0x80, 0x93, 0x80, 0x60, 0x00, 0x00],
    'h': [0x08, 0x20, 0xF8, 0x3F, 0x00, 0x21, 0x80, 0x00, 0x80, 0x00, 0x80, 0x20, 0x00, 0x3F, 0x00, 0x20],
    'i': [0x00, 0x00, 0x80, 0x20, 0x98, 0x20, 0x98, 0x3F, 0x00, 0x20, 0x00, 0x20, 0x00, 0x00, 0x00, 0x00],
    'j': [0x00, 0x00, 0x00, 0xC0, 0x00, 0x80, 0x80, 0x80, 0x98, 0x80, 0x98, 0x7F, 0x00, 0x00, 0x00, 0x00],
    'k': [0x08, 0x20, 0xF8, 0x3F, 0x00, 0x24, 0x00, 0x02, 0x80, 0x2D, 0x80, 0x30, 0x80, 0x20, 0x00, 0x00],
    'l': [0x00, 0x00, 0x08, 0x20, 0x08, 0x20, 0xF8, 0x3F, 0x00, 0x20, 0x00, 0x20, 0x00, 0x00, 0x00, 0x00],
    'm': [0x80, 0x20, 0x80, 0x3F, 0x80, 0x20, 0x80, 0x00, 0x80, 0x3F, 0x80, 0x20, 0x80, 0x00, 0x00, 0x3F],
    'n': [0x80, 0x20, 0x80, 0x3F, 0x00, 0x21, 0x80, 0x00, 0x80, 0x00, 0x80, 0x20, 0x00, 0x3F, 0x00, 0x20],
    'o': [0x00, 0x00, 0x00, 0x1F, 0x80, 0x20, 0x80, 0x20, 0x80, 0x20, 0x80, 0x20, 0x00, 0x1F, 0x00, 0x00],
    'p': [0x80, 0x80, 0x80, 0xFF, 0x00, 0xA1, 0x80, 0x20, 0x80, 0x20, 0x00, 0x11, 0x00, 0x0E, 0x00, 0x00],
    'q': [0x00, 0x00, 0x00, 0x0E, 0x00, 0x11, 0x80, 0x20, 0x80, 0x20, 0x80, 0xA0, 0x80, 0xFF, 0x00, 0x80],
    'r': [0x80, 0x20, 0x80, 0x20, 0x80, 0x3F, 0x00, 0x21, 0x80, 0x20, 0x80, 0x00, 0x80, 0x01, 0x00, 0x00],
    's': [0x00, 0x00, 0x00, 0x33, 0x80, 0x24, 0x80, 0x24, 0x80, 0x24, 0x80, 0x24, 0x80, 0x19, 0x00, 0x00],
    't': [0x00, 0x00, 0x80, 0x00, 0x80, 0x00, 0xE0, 0x1F, 0x80, 0x20, 0x80, 0x20, 0x00, 0x00, 0x00, 0x00],
    'u': [0x80, 0x00, 0x80, 0x1F, 0x00, 0x20, 0x00, 0x20, 0x00, 0x20, 0x80, 0x10, 0x80, 0x3F, 0x00, 0x20],
    'v': [0x80, 0x00, 0x80, 0x01, 0x80, 0x0E, 0x00, 0x30, 0x00, 0x08, 0x80, 0x06, 0x80, 0x01, 0x80, 0x00],
    'w': [0x80, 0x0F, 0x80, 0x30, 0x00, 0x0C, 0x80, 0x03, 0x00, 0x0C, 0x80, 0x30, 0x80, 0x0F, 0x80, 0x00],
    'x': [0x00, 0x00, 0x80, 0x20, 0x80, 0x31, 0x00, 0x2E, 0x80, 0x0E, 0x80, 0x31, 0x80, 0x20, 0x00, 0x00],
    'y': [0x80, 0x80, 0x80, 0x81, 0x80, 0x8E, 0x00, 0x70, 0x00, 0x18, 0x80, 0x06, 0x80, 0x01, 0x80, 0x00],
    'z': [0x00, 0x00, 0x80, 0x21, 0x80, 0x30, 0x80, 0x2C, 0x80, 0x22, 0x80, 0x21, 0x80, 0x30, 0x00, 0x00],
    'A': [0x00, 0x20, 0x00, 0x3C, 0xC0, 0x23, 0x38, 0x02, 0xE0, 0x02, 0x00, 0x27, 0x00, 0x38, 0x00, 0x20],
    'B': [0x08, 0x20, 0xF8, 0x3F, 0x88, 0x20, 0x88, 0x20, 0x88, 0x20, 0x70, 0x11, 0x00, 0x0E, 0x00, 0x00],
    'C': [0xC0, 0x07, 0x30, 0x18, 0x08, 0x20, 0x08, 0x20, 0x08, 0x20, 0x08, 0x10, 0x38, 0x08, 0x00, 0x00],
    'D': [0x08, 0x20, 0xF8, 0x3F, 0x08, 0x20, 0x08, 0x20, 0x08, 0x20, 0x10, 0x10, 0xE0, 0x0F, 0x00, 0x00],
    'E': [0x08, 0x20, 0xF8, 0x3F, 0x88, 0x20, 0x88, 0x20, 0xE8, 0x23, 0x08, 0x20, 0x10, 0x18, 0x00, 0x00],
    'F': [0x08, 0x20, 0xF8, 0x3F, 0x88, 0x20, 0x88, 0x00, 0xE8, 0x03, 0x08, 0x00, 0x10, 0x00, 0x00, 0x00],
    'G': [0xC0, 0x07, 0x30, 0x18, 0x08, 0x20, 0x08, 0x20, 0x08, 0x22, 0x38, 0x1E, 0x00, 0x02, 0x00, 0x00],
    'H': [0x08, 0x20, 0xF8, 0x3F, 0x08, 0x21, 0x00, 0x01, 0x00, 0x01, 0x08, 0x21, 0xF8, 0x3F, 0x08, 0x20],
    'I': [0x00, 0x00, 0x08, 0x20, 0x08, 0x20, 0xF8, 0x3F, 0x08, 0x20, 0x08, 0x20, 0x00, 0x00, 0x00, 0x00],
    'J': [0x00, 0xC0, 0x00, 0x80, 0x08, 0x80, 0x08, 0x80, 0xF8, 0x7F, 0x08, 0x00, 0x08, 0x00, 0x00, 0x00],
    'K': [0x08, 0x20, 0xF8, 0x3F, 0x88, 0x20, 0xC0, 0x01, 0x28, 0x26, 0x18, 0x38, 0x08, 0x20, 0x00, 0x00],
    'L': [0x08, 0x20, 0xF8, 0x3F, 0x08, 0x20, 0x00, 0x20, 0x00, 0x20, 0x00, 0x20, 0x00, 0x30, 0x00, 0x00],
    'M': [0x08, 0x20, 0xF8, 0x3F, 0xF8, 0x00, 0x00, 0x3F, 0xF8, 0x00, 0xF8, 0x3F, 0x08, 0x20, 0x00, 0x00],
    'N': [0x08, 0x20, 0xF8, 0x3F, 0x30, 0x20, 0xC0, 0x00, 0x00, 0x07, 0x08, 0x18, 0xF8, 0x3F, 0x08, 0x00],
    'O': [0xE0, 0x0F, 0x10, 0x10, 0x08, 0x20, 0x08, 0x20, 0x08, 0x20, 0x10, 0x10, 0xE0, 0x0F, 0x00, 0x00],
    'P': [0x08, 0x20, 0xF8, 0x3F, 0x08, 0x21, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0xF0, 0x00, 0x00, 0x00],
    'Q': [0xE0, 0x0F, 0x10, 0x18, 0x08, 0x24, 0x08, 0x24, 0x08, 0x38, 0x10, 0x50, 0xE0, 0x4F, 0x00, 0x00],
    'R': [0x08, 0x20, 0xF8, 0x3F, 0x88, 0x20, 0x88, 0x00, 0x88, 0x03, 0x88, 0x0C, 0x70, 0x30, 0x00, 0x20],
    'S': [0x00, 0x00, 0x70, 0x38, 0x88, 0x20, 0x08, 0x21, 0x08, 0x21, 0x08, 0x22, 0x38, 0x1C, 0x00, 0x00],
    'T': [0x18, 0x00, 0x08, 0x00, 0x08, 0x20, 0xF8, 0x3F, 0x08, 0x20, 0x08, 0x00, 0x18, 0x00, 0x00, 0x00],
    'U': [0x08, 0x00, 0xF8, 0x1F, 0x08, 0x20, 0x00, 0x20, 0x00, 0x20, 0x08, 0x20, 0xF8, 0x1F, 0x08, 0x00],
    'V': [0x08, 0x00, 0x78, 0x00, 0x88, 0x07, 0x00, 0x38, 0x00, 0x0E, 0xC8, 0x01, 0x38, 0x00, 0x08, 0x00],
    'W': [0xF8, 0x03, 0x08, 0x3C, 0x00, 0x07, 0xF8, 0x00, 0x00, 0x07, 0x08, 0x3C, 0xF8, 0x03, 0x00, 0x00],
    'X': [0x08, 0x20, 0x18, 0x30, 0x68, 0x2C, 0x80, 0x03, 0x80, 0x03, 0x68, 0x2C, 0x18, 0x30, 0x08, 0x20],
    'Y': [0x08, 0x00, 0x38, 0x00, 0xC8, 0x20, 0x00, 0x3F, 0xC8, 0x20, 0x38, 0x00, 0x08, 0x00, 0x00, 0x00],
    'Z': [0x10, 0x20, 0x08, 0x38, 0x08, 0x26, 0x08, 0x21, 0xC8, 0x20, 0x38, 0x20, 0x08, 0x18, 0x00, 0x00],
};