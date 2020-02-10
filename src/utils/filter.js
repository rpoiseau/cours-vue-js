export default function ageFilter(value) {
    return `${value} ${value > 1 ? 'ans.' : 'an.'}`;
}