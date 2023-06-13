import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class User {
    @Prop()
    nome: string
    @Prop()
    idade: number
    @Prop()
    email: string
    @Prop()
    senha: string
}

export const UserSchema = SchemaFactory.createForClass(User)
