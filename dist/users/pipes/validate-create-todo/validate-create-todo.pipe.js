"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCreateTodoPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateCreateTodoPipe = class ValidateCreateTodoPipe {
    transform(value, metadata) {
        console.log("ValidateCreateTodoPipe");
        value.title = value.title.trim();
        value.content = value.content.trim();
        console.log("value", value);
        console.log("metadata", metadata);
        return value;
    }
};
ValidateCreateTodoPipe = __decorate([
    (0, common_1.Injectable)()
], ValidateCreateTodoPipe);
exports.ValidateCreateTodoPipe = ValidateCreateTodoPipe;
//# sourceMappingURL=validate-create-todo.pipe.js.map