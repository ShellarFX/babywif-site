interface RoadmapItemProps {
  title: string
  items?: string[]
}

export const RoadmapItem = ({title, items}: RoadmapItemProps) => {
  return (
      <div>
        <p>{title}</p>

        {!!items && <ul className="list-disc pl-8 text-2xl text-left">
          {items.map((item, index) => (
              <li key={index}>{item}</li>
          ))}
        </ul>}
      </div>
  )
}