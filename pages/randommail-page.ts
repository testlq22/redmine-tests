

export class RandomMailPage {
  static randomUser(): string {
    const rnd = (() => {
        const gen = (min, max) => max++ && [...Array(max-min)].map((s, i) => String.fromCharCode(min+i));
        
        const sets = {
            num: gen(48,57),
            alphaLower: gen(97,122),
            alphaUpper: gen(65,90),                
            };
        
            function* iter(len, set) {
                if (set.length < 1) set = Object.values(sets).flat(); 
                for (let i = 0; i < len; i++) yield set[Math.random() * set.length|0]
            }
        
            return Object.assign(((len, ...set) => [...iter(len, set.flat())].join('')), sets);
        })();
        
        return rnd(10,);
    //throw new Error('Method not implemented.');
  }
  static randomEmail ():string {
    const rnd = (() => {
        const gen = (min, max) => max++ && [...Array(max-min)].map((s, i) => String.fromCharCode(min+i));
    
        const sets = {
            alphaLower: gen(97,122),
            alphaUpper: gen(65,90),                
        };
    
        function* iter(len, set) {
            if (set.length < 1) set = Object.values(sets).flat(); 
            for (let i = 0; i < len; i++) yield set[Math.random() * set.length|0]
        }
    
        return Object.assign(((len, ...set) => [...iter(len, set.flat())].join('')), sets);
    })();
    
    return rnd(5,) + '@gmail.com';
            
    };

  static randomPassword (): string {
    const rnd = (() => {
        const gen = (min, max) => max++ && [...Array(max-min)].map((s, i) => String.fromCharCode(min+i));
        
        const sets = {
            num: gen(48,57),
            alphaLower: gen(97,122),
            alphaUpper: gen(65,90),
            special: [...`~!@#$%^&*()_+-=[]\{}|;:'",./<>?`]
            };
        
            function* iter(len, set) {
                if (set.length < 1) set = Object.values(sets).flat(); 
                for (let i = 0; i < len; i++) yield set[Math.random() * set.length|0]
            }
        
            return Object.assign(((len, ...set) => [...iter(len, set.flat())].join('')), sets);
        })();
        
        return rnd(15,);
                    
        };
    
    
  

  
    
            
}        
        
        


