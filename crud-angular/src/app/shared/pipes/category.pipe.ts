import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Accounting': return 'table_view';
      case 'Biomedicine': return 'medical_services';
      case 'Civil Engineering': return 'engineering';
      case 'Fashion design': return 'yard';
      case 'Gastronomy': return 'restaurant';
      case 'Journalism': return 'newspaper';
      case 'Management': return 'business_center';
      case 'Marketing': return 'lightbulb_outline';
      case 'Medicine': return 'volunteer_activism';
    }
    return 'code';
  }

}
