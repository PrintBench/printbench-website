// Single source for the full feature list on /features/. Keep claims in line with the
// project README and the roadmap's shipped entries.
import type { ComponentProps } from 'astro/types'
import type Icon from '../components/Icon.astro'

type IconName = ComponentProps<typeof Icon>['name']

export interface Feature {
  title: string
  body: string
}

export interface FeatureGroup {
  id: string
  title: string
  summary: string
  icon: IconName
  features: Feature[]
}

export const featureGroups: FeatureGroup[] = [
  {
    id: 'find',
    title: 'Find and preview',
    summary: 'Turn folders of cryptic filenames into a library you can browse and search.',
    icon: 'search',
    features: [
      { title: 'Search that forgives typos', body: 'Filter by tag, creator, licence, format or “never printed”. Every search is a plain URL you can bookmark and share.' },
      { title: 'Automatic thumbnails', body: 'Thumbnails for STL, 3MF, OBJ and PLY, rendered by a pure TypeScript rasteriser with no native toolchain. Even a 6 GB STL renders.' },
      { title: 'In-browser 3D preview', body: 'Rotate and inspect any model right in the browser before you commit to printing it.' },
      { title: 'Model packages', body: 'Group related models and shared files into a package with its own metadata and preview. Each model keeps its own entry.' },
      { title: 'Collapsible file trees', body: 'See every file that belongs to a model, including sliced output and supporting files, without leaving the page.' },
      { title: 'Previews that stay current', body: 'Thumbnails and previews refresh automatically as files change, with no manual rescans.' },
    ],
  },
  {
    id: 'organise',
    title: 'Organise your way',
    summary: 'Give every model more than one useful home, and keep the context with it.',
    icon: 'collection',
    features: [
      { title: 'Tags, creators and collections', body: 'Coloured tags (with merge), creator pages and nested collections, plus a private Liked list.' },
      { title: 'Notes and print photos', body: 'Keep your own notes and photos of finished prints next to the model they belong to.' },
      { title: 'Licence details and expiry', body: 'Record the licence for a model and when it expires, so you know what you are allowed to do with it.' },
      { title: 'Multiple source links', body: 'Attach every place a model came from, such as MakerWorld, Printables or Thingiverse.' },
      { title: 'Separate model and package browsing', body: 'Creator pages show models and packages in their own collapsible sections, each with counts and pagination.' },
    ],
  },
  {
    id: 'print',
    title: 'From file to finished print',
    summary: 'Carry a model through slicing, printing and the result, then remember what happened.',
    icon: 'printer',
    features: [
      { title: 'Open in your slicer', body: 'Hand files to Bambu Studio, Creality Print, OrcaSlicer, PrusaSlicer, Cura or Lychee in one click.' },
      { title: 'Send to your printer', body: 'Dispatch sliced files to OctoPrint, Moonraker or PrusaLink printers.' },
      { title: 'Detailed print history', body: 'Log printer, material, nozzle, temperatures, walls, infill, slicer profile, rating and notes. G-code can fill in the settings for you.' },
      { title: 'Success rate per model', body: 'See at a glance how often a model has printed well, and what worked.' },
      { title: 'A queue for the household', body: 'Paste a list of things people asked for, one per line. PrintBench links the ones it recognises and keeps the queue shared.' },
    ],
  },
  {
    id: 'filament',
    title: 'Filament',
    summary: 'Know what is on the shelf and what each print really cost.',
    icon: 'database',
    features: [
      { title: 'Spool inventory', body: 'Manage individual spools and weigh what remains, so you never start a long print short.' },
      { title: 'Multi-spool prints', body: 'Track consumption and cost across prints that use several spools or colours.' },
      { title: 'Offline filament catalogue', body: 'Fill in a spool from a bundled snapshot of the Open Filament Database. It works with no internet connection.' },
    ],
  },
  {
    id: 'import',
    title: 'Import and upload',
    summary: 'Get models in from wherever they live, without retyping details.',
    icon: 'upload',
    features: [
      { title: 'Import from model sites', body: 'Paste a MakerWorld, Printables or Thingiverse link, or drop in a 3MF and let its embedded details fill in the blanks.' },
      { title: 'Browser clipper', body: 'Send the model page you are viewing to a library you choose from Chrome, Edge or Firefox.' },
      { title: 'One upload flow', body: 'Upload files and import links in the same place. Uploads are resumable and ZIPs are extracted for you.' },
      { title: 'Lower-memory 3MF processing', body: 'Large 3MF files are processed with far less memory, so a modest server can cope with them.' },
    ],
  },
  {
    id: 'libraries',
    title: 'Libraries and storage',
    summary: 'Index what you have where it already lives, and never risk it.',
    icon: 'folder',
    features: [
      { title: 'Index in place', body: 'Existing libraries are mounted read-only. Files are never moved, renamed or deleted. Managed libraries can opt into changes.' },
      { title: 'Local disk, NAS or S3', body: 'Use a folder, a network share or S3-compatible storage, and share one S3 connection across libraries.' },
      { title: 'Move models between libraries', body: 'Relocate models between libraries, or choose where models go when you remove a library.' },
      { title: 'Scan guardrails', body: 'An unmounted NAS never looks like a mass deletion. Scans refuse to wipe your metadata.' },
      { title: 'Rebuild from disk', body: 'Metadata is written beside each model as sidecar files, so the database can be restored from the files alone.' },
    ],
  },
  {
    id: 'people',
    title: 'Sharing and administration',
    summary: 'Run it for a household or a small makerspace with the tools to keep it healthy.',
    icon: 'lock',
    features: [
      { title: 'Share one model by link', body: 'Send a single model to someone without giving them access to the rest of the library.' },
      { title: 'Viewers, members and admins', body: 'Invite people with the role that fits, and manage users from one place.' },
      { title: 'Password changes and recovery', body: 'Change your password from Account settings. Admins can create a single-use recovery link with no email setup.' },
      { title: 'Background activity panel', body: 'Follow scans, imports, uploads and thumbnail jobs from one panel while you work elsewhere.' },
      { title: 'Audit trail and diagnostics', body: 'Review audit events, logs and debug details when something needs investigating.' },
      { title: 'Library health checks', body: 'Surface missing, duplicated or unreadable files before they become a problem.' },
      { title: 'Whole-instance backup and restore', body: 'Back up and restore everything PrintBench knows, with a clear upgrade path and update checks.' },
    ],
  },
  {
    id: 'hosting',
    title: 'Self-hosting',
    summary: 'Small to run, simple to upgrade, and entirely yours.',
    icon: 'docker',
    features: [
      { title: 'One-command setup', body: 'Download the Compose file and run docker compose up -d. Credentials are generated on first start.' },
      { title: 'Postgres is the only dependency', body: 'No Redis, message broker or Elasticsearch to operate.' },
      { title: 'Coolify ready', body: 'A production Compose stack and a documented Coolify deployment, including domains and persistent storage.' },
      { title: 'Open source, MIT licensed', body: 'Inspect every line, run it on hardware you control and shape it around your bench.' },
    ],
  },
]

export const featureCount = featureGroups.reduce((total, group) => total + group.features.length, 0)
