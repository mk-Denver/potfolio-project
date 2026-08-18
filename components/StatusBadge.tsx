type Tone = 'merged' | 'draft' | 'accepted' | 'final' | 'neutral';

const toneMap: Record<string, Tone> = {
  Merged: 'merged',
  Draft: 'draft',
  Accepted: 'accepted',
  Final: 'final',
};

export default function StatusBadge({ status }: { status: string }) {
  const tone = toneMap[status] ?? 'neutral';
  return <span className={`badge badge-${tone}`}>{status}</span>;
}
