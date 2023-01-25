/// <reference types="react" />
import 'bootstrap/dist/css/bootstrap.css';
import { DivProps } from 'react-html-props';
export declare const settingsPath = "/github-projectv2-csv-exporter/?path=/story/tools-github-project-exporter--settings";
export interface GitHubExporterSettingsProps extends DivProps {
}
/**
 * Settings for the GitHub project exporter.
 */
export declare const GitHubExporterSettings: ({ ...props }: GitHubExporterSettingsProps) => JSX.Element;
