import { Component, Input } from '@angular/core';

interface ShellMetric {
  label: string;
  value: string;
}

@Component({
  selector: 'app-dashboard-shell',
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.scss',
  standalone: false,
})
export class DashboardShellComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() metrics: ShellMetric[] = [];
  @Input() secondaryMetrics: ShellMetric[] = [];
}
