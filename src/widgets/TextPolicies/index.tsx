import React from 'react';
import { ITextPolicies } from './TextPolicies.interface';
import AppConfig from '@/lib/AppConfig';

const TextPolicies: React.FC<ITextPolicies> = ({
  title,
  type,
  detailText,
  teaserText
}) => {
  const processedHtml = detailText?.replace(
    /<p[^>]*>&lt;a&gt;[^#]*#([^<]+)&lt;\/a&gt;<\/p>/g,
    '<a name="$1"> </a>'
  );

  return (
    <div className="container mx-auto px-4 py-8">
			<p className="text-center font-light">{title}</p>
      <div className="prose prose-textPolicies">
        {AppConfig.html(processedHtml)}
      </div>
    </div>
  );
};

export default TextPolicies;
