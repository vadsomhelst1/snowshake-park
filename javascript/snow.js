



function updateTrees() {



    for (const tree of currentLevel.trees) {
        const crown = tree.children[1];
        console.log('update');
        if (random(0, 15) > 12 && !crown.shaking) {
            const textureState = crown.textureState;
            crown.texture = CROWN_TEXTURES[crown.textureName][`_${(textureState + 1)}`];
            crown.textureState += 1;
            break;
        }

    }
    



}

