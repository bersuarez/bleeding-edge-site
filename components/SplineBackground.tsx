import React from 'react';
import Spline from '@splinetool/react-spline';

interface SplineBackgroundProps {
    sceneUrl?: string;
}

export const SplineBackground: React.FC<SplineBackgroundProps> = ({
    // Default to a placeholder if none provided. 
    // User should update this with the exported .splinecode URL (e.g. from https://my.spline.design/...)
    // The provided link https://app.spline.design/file/... is an editor link and won't work directly.
    sceneUrl = "https://prod.spline.design/s-2FAFnZqW5Po3Qm/scene.splinecode"
}) => {
    return (
        <div className="fixed inset-0 z-0 w-full h-full">
            <Spline scene={sceneUrl} />
            {/* Fallback/Overlay to ensure text readability if the scene loads slowly or is too bright */}
            <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />
        </div>
    );
};
