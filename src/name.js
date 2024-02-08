import photo from './img/photo.png'
export default{
    id: 'acme:my-feature-service',
  
    create(env) {
        const details={
            name:"Ekansh Gupta",
            company:"Volkswagen Group Technology Solutions",
            department:"Brands and Regions",
            subDepartment:"Skoda",
            track:"Java",
            photo:photo
      }
  
      const v1 = (consumerId) => ({
        
        featureService: {
          
          getDetails() {
            return details;
          },
        },
      });
  
      return {'1.1.0': v1};
    },
  };