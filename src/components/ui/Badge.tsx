interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <span className="inline-block rounded-full bg-sun px-3 py-1 text-sm font-semibold text-ocean-dark">
      {label}
    </span>
  );
};

export default Badge;
