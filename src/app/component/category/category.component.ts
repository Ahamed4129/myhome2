import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
interface Category {
  name: string;
  checked: boolean;
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];  // Initialize categories with proper type

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }
}
