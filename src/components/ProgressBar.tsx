import React from 'react';



const ProgressBar: React.FC<{completed:number}> = ({ completed }) => {
    const safeCompleted = Math.max(0, Math.min(100, completed));

    return (
        <div className='progress-bar progress-uncompleted'>
            <div
                className='progress-completed'
                style={{
                    width: `${safeCompleted}%`,
                }}
            >
                <span className='progress-completed-label'>{safeCompleted}%</span>
            </div>
        </div>
    );
};

export default ProgressBar;