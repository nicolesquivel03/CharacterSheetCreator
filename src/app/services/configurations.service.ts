import { Injectable } from '@angular/core';

import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Configurations } from 'src/app/entities/configurations.model';
import { Settings } from '../game-configuration/settings';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {

  private collectionId = 'GenesysCharacterSheet';
  private documentId = 'configurations';

  configuration = this.firestore.collection(this.collectionId).doc(this.documentId).get();

  constructor(private firestore: AngularFirestore) { }

  getConfigurations(): Configurations {
    this.firestore.collection(this.collectionId).doc(this.documentId)
    .ref
    .get().then(function(doc) {
      if (doc.exists){
        // Convert to configurations object
        var configurationsObject = doc.data();
        console.log(configurationsObject.toString());
        var configurations = new Configurations(configurationsObject.magicEnabled, configurationsObject.settings);
        // Use a configurations instance method
        console.log(configurations);
        return configurations;
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });
    return null;
  }

  private converter = {
    toFirestore: function(configurations) {
        var jsObject = {
            magicEnabled: this.magicEnabled
        }

        const mapObject: any = {};

        this.settings.forEach((value, key) => {
            Object.defineProperty(mapObject, key, {
                value: value,
                writable: true,
                enumerable: true
            });
        });

        Object.defineProperty(jsObject, 'settings', {
            value: mapObject,
            writable: true,
            enumerable: true
        })

        return jsObject;
    },
    fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options);
        return new Configurations(data.magicEnabled, data.settings)
    }
}

  /*
  createConfigurations() {
    var magicEnabled = false;
    var settings: Map<string, string> = new Map([
      [ 'all', 'All'],
      [ 'fantasy', 'Fantasy' ],
      [ 'modernDay', 'Modern Day' ],
      [ 'sciFi', 'Science Fiction' ],
      [ 'spaceOpera', 'Space Opera' ],
      [ 'steampunk', 'Steampunk' ],
      [ 'weirdWar', 'Weird War' ]
    ]);

    var config = new Configurations(magicEnabled, settings);

    this.createConfiguration(config);
  }

  private createConfiguration(config: Configurations) {
    this.firestore.collection(this.collectionId).add(config.toFirestore())
    .then(function(ref) {
      console.log("ID: ", ref.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    })
  }
  */

  
}
