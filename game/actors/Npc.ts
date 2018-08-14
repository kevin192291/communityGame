import * as ex from 'excalibur';
import {
    PreCollisionEvent,
    Scene,
    Actor,
    Engine
} from "excalibur";
import { Character } from './Character';

export class Npc extends Character {
    public name: string = 'unknown';

    constructor(engine: Scene, name?: string) {
        super(engine, name);
    }

    public walk() {

    }

}