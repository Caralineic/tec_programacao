import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFrom } from './produto-from';

describe('ProdutoFrom', () => {
  let component: ProdutoFrom;
  let fixture: ComponentFixture<ProdutoFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoFrom],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
