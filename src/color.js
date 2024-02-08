import { useState } from "react";
import useColor from './useColor'
class ColorV1 {
    constructor(bg = "biege") {
      this.bg = bg;
      this.listeners = new Set();
    }
  
    subscribe(listener) {
      this.listeners.add(listener);
  
      return () => this.listeners.delete(listener);
    }
  
    update(bg, uniqueConsumerId) {
      this.bg = bg;
      this.listeners.forEach(listener => listener(uniqueConsumerId));
    }
  }

export class ConsumerColorV1 {
    constructor(color, uniqueConsumerId) {
        this.color = color;
        this.uniqueConsumerId = uniqueConsumerId;
      }
    
      get bg() {
        return this.color.bg;
      }
    
      setBg(bg) {
        this.update(bg);
      }
    
    
      subscribe(listener) {
        return this.color.subscribe(listener);
      }
    
      update(bg) {
        this.color.update(bg, this.uniqueConsumerId);
      }
    }

export default{
    id: 'acme:color-service',
  
    create: () => {
        const sharedColor = new ColorV1();
    
        return {
          '1.0.0': uniqueConsumerId => ({
            featureService: new ConsumerColorV1(sharedColor, uniqueConsumerId)
          })
        };
      }
  };