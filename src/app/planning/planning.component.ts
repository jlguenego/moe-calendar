import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit {
  tasks = [
    {
      name: 'Installation de chantier',
      selected: [1, 1, 0, 0, 0, 0, 0],
    },
    {
      name: 'Maconnerie Gros oeuvre',
      selected: [1, 1, 1, 0, 0, 0, 0],
    },
    {
      name: 'Charpente et couverture',
      selected: [0, 1, 1, 1, 0, 0, 0],
    },
    {
      name: 'Menuiserie',
      selected: [0, 1, 1, 1, 1, 1, 0],
    },
    {
      name: 'Menuiserie',
      selected: [0, 1, 1, 1, 1, 1, 0],
    },
    {
      name: 'Menuiserie',
      selected: [0, 1, 1, 1, 1, 1, 0],
    },
    {
      name: 'Menuiserie',
      selected: [0, 1, 1, 1, 1, 1, 0],
    },
    {
      name: 'Menuiserie',
      selected: [0, 1, 1, 1, 1, 1, 0],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
